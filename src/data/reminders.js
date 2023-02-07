import { writable } from "svelte/store";

export const reminders = writable([
    {
        id: 1,
        title: 'Reminder #1',
        body: 'Reminder #1 body - This text is a bit smaller and longer',
        interval: 20
    },
    {
        id: 2,
        title: 'Reminder #2',
        body: 'Reminder #2 body - This text is a bit smaller and longer',
        interval: 40
    },
    {
        id: 3,
        title: 'Reminder #3',
        body: 'Reminder #3 body - This text is a bit smaller and longer',
        interval: 60
    }
]);