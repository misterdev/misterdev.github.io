<script>
    import { navigation, content } from '../stores/crafting.js'
    let items;
    let selected;

    navigation.subscribe(nav => {
        items = content[nav.cat]
        selected = nav.selected
    })

    const selectItem = (index) => {
        navigation.update(({cat, selected}) => ({cat, selected: index}))
    }
</script>

<div class="wrapper">
    {#each items as { label, icon}, i}
        <div class="item" on:click={() => selectItem(i)}>
            <img src={icon} />
        </div>
    {/each}
</div>

<style>
    .wrapper {
        position: absolute;
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: flex-start;
        background-color: yellow;
        opacity: .8;
    }
    .item {
        flex-basis: 25%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: brown;
        opacity: .8;
    }
    .item:before {
        content:'';
        float:left;
        padding-top:100%;
    }
    .item:hover {
        background-color: green;
    }
    .item img {
        max-width: 60%;
    }
</style>