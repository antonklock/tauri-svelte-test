<script lang="ts">
    export let id: number;
    export let title: string;
    export let body: string;
    export let interval: number;
</script>

<div class="mainContainer">
    <h2>{title}</h2>
    <p>{body}</p>
    <p class="interval">Interval: {interval}</p>
    <p class="id">id: {id}</p>
</div>

<style>
    .mainContainer {
        background: rgb(0, 0, 0, 0.5);
        border-radius: 0.5em;
        padding-top: 0.5em;
        padding-bottom: 0.5em;
        padding-left: 1.5em;
        padding-right: 1.5em;
        margin-bottom: 1.5em;

        text-align: left;
    }
    .interval {
        color: aquamarine;
    }

    .id {
        color: crimson;
    }
</style>
