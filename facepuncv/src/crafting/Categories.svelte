<script>
    import { categories as cats, content, navigation } from '../stores/crafting.js';
    import FaChartLine from 'svelte-icons/fa/FaChartLine.svelte'
    import FaBroom from 'svelte-icons/fa/FaBroom.svelte'
    import FaAward from 'svelte-icons/fa/FaAward.svelte'

    // const items = Object.keys(categories).map(k => categories[k]) 

    const selectCat = (catId) => {
        navigation.update(nav => ({cat: catId, selected: 0}))
    }
</script>

<div id="wrapper">
    <div class="item" on:click={() => selectCat(cats.EXP.id)}>
        <div class="icon">
            <FaChartLine />
        </div>
        <div>EXPERIENCE</div>
        <div class="counter">4</div>
    </div>
    <div class="item" on:click={() => selectCat(cats.EDU.id)}>
        <div class="icon">
            <FaBroom />
        </div>
        <div>EDUCATION</div>
        <div class="counter">3</div>
    </div>
    <div class="item" on:click={() => selectCat(cats.PROJ.id)}>
        <div class="icon">
            <FaAward />
        </div>
        <div>PROJECTS</div>
        <div class="counter">7</div>
    </div>
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
        font-size: 1vw;
        font-weight: 800;
    }
    .item {
        padding: 4px;
        box-sizing: border-box;
        background-color: orange;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .item:hover {
        background-color: #4184B7;
        color: white;
    }
    .icon {
        width: 1vw;
        height: 1vw;
        margin-right: 6px; 
    }
    .counter {
        flex-grow: 1;
        text-align: right;
    }
</style>