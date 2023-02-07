<script lang="ts">
    import Reminder from "./Reminder.svelte";
    import { reminders } from "../data/reminders";

    const name = "Remi";
</script>

<div>
    <h1>This is the RemiList component</h1>
    <p>It is a list of {name}'s</p>

    {#each $reminders as reminder}
        <Reminder
            id={reminder.id}
            title={reminder.title}
            body={reminder.body}
            interval={reminder.interval}
        />
    {/each}

    <!-- {#each Array(5) as _, index (index)}
        <Reminder />
    {/each} -->
</div>
