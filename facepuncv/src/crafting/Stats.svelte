<script>
    import {navigation, content} from '../stores/crafting.js'

    let stats
    navigation.subscribe(({cat, selected}) => {
        stats = content[cat][selected].stats
    })
</script>

<div id="wrapper">
    <div id="header" class="item">
        <div>AMOUNT</div>
        <div>SKILL</div>
    </div>
    {#each stats as {label, count}}
        <div class="item">
            <div>{count}</div>
            <div>{label}</div>
        </div>
    {/each}
</div>

<style>
    #wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: lightgrey;
        display: flex;
        flex-direction: column;
        font-size: 1vw;
    }
    .item {
        flex-basis: 10%;
        display: flex;
        flex-direction: row;
        background-color: green;
    }
    .item > div {
        margin: 2px;
        padding: 2px;
        box-sizing: border-box;
        display: flex;
        align-items: center; /* Vertical center alignment */
    }
    #header.item > div:nth-child(1) {
        justify-content: center;
    }
    .item > div:nth-child(1) {
        flex-basis: 25%;
        background-color: lightskyblue;
        justify-content: flex-end;
    }
    .item > div:nth-child(2) {
        background-color: khaki;
        flex-basis: 75%;
    }
</style>