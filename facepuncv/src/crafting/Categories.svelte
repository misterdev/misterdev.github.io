<script>
    import { categories, content, navigation } from '../stores/crafting.js';
    const items = Object.keys(categories).map(k => categories[k]) 

    const selectCat = (catId) => {
        navigation.update(nav => ({cat: catId, selected: 0}))
    }
</script>

<div id="wrapper">
    {#each items as {id, label, count}}
        <div class="item" on:click={() => selectCat(id)}>
            {label}
        </div>
    {/each}
</div>

<style>
    #wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        background-color: red;
        overflow: hidden;
    }
    .item {
        padding: 4px;
        box-sizing: border-box;
        background-color: orange;
        font-size: 1vw;
    }
    .item:hover {
        background-color: #4184B7;
        color: white;
    }
</style>