<script>
    import { categories } from '../stores/crafting.js';
    const cats = Object.keys(categories).map(k => categories[k])
</script>

<div id="wrapper">
    {#each cats as item}
        <div class="item">{item}</div>
    {/each}
</div>

<style>
    #wrapper {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        background-color: red;
    }
    .item {
        padding: 4px;
        box-sizing: border-box;
        background-color: orange;
    }
</style>