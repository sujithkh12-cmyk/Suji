import { User } from "../Model/User.js";
import { Inngest } from "inngest";
// Create a client to send and receive events
export const inngest = new Inngest({ id: "movie-ticket-booking" });
//to save user data
const syncUserData = inngest.createFunction(
    { id: 'sync-user-from-clerk' },
    { event: 'clerk/user.created' },
    async ({ event }) => {
        const { id, first_name, last_name, email_addresses, image_url } = event.data
        const userData = {
            _id: id,
            email: email_addresses[0].email_addresse,
            name: first_name + " " + last_name,
            image: image_url
        }
        await User.create(userData)
    }
)
//to delete from data base
const syncUserDeletion = inngest.createFunction(
    { id: 'delete-user-with-cleark' },
    { event: 'clerk/user.deleted' },
    async ({ event }) => {
        const { id } = event.data
        await User.findByIdAndDelete(id)
    }
)
//to update
const syncUserUpdation = inngest.createFunction(
    { id: 'update-user-from-cleark' },
    { event: 'clerk/user.updated' },
    async ({ event }) => {
        const { id, first_name, last_name, email_addresses, image_url } = event.data
        const userData = {
            _id: id,
            email: email_addresses[0].email_addresse,
            name: first_name + " " + last_name,
            image: image_url
        }
        await User.findByIdAndUpdate(id, userData)
    }
)
// Create an empty array where we'll export future Inngest functions
export const functions = [syncUserData, syncUserDeletion, syncUserUpdation];