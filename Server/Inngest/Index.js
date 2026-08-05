import User from "../Model/User.js";
import { Inngest } from "inngest";

// Create a client
export const inngest = new Inngest({ id: "movie-ticket-booking" });

// Sync user from Clerk
const syncUserData = inngest.createFunction(
    {
        id: "sync-user-from-clerk",
        triggers: [{ event: "clerk/user.created" }],
    },
    async ({ event }) => {
        const { id, first_name, last_name, email_addresses, image_url } = event.data;

        const userData = {
            _id: id,
            email: email_addresses[0].email_address,
            name: `${first_name} ${last_name}`,
            image: image_url,
        };

        await User.create(userData);
    }
);

// Delete user
const syncUserDeletion = inngest.createFunction(
    {
        id: "delete-user-with-clerk",
        triggers: [{ event: "clerk/user.deleted" }],
    },
    async ({ event }) => {
        const { id } = event.data;
        await User.findByIdAndDelete(id);
    }
);

// Update user
const syncUserUpdation = inngest.createFunction(
    {
        id: "update-user-from-clerk",
        triggers: [{ event: "clerk/user.updated" }],
    },
    async ({ event }) => {
        const { id, first_name, last_name, email_addresses, image_url } = event.data;

        const userData = {
            _id: id,
            email: email_addresses[0].email_address,
            name: `${first_name} ${last_name}`,
            image: image_url,
        };

        await User.findByIdAndUpdate(id, userData);
    }
);

export const functions = [
    syncUserData,
    syncUserDeletion,
    syncUserUpdation,
];