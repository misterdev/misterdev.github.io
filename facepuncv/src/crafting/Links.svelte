<script>
    import { navigation, content } from '../stores/crafting.js'

    let links;
    navigation.subscribe(({cat, selected}) => {
        links = content[cat][selected].links
    })
</script>


<div id="wrapper">
    <div id="title">LINKS</div>
    <div id="links">
        {#each links as {icon, url}}
            <a class="item" href={url} target="_blank">
                <img src={icon} alt={'link'} />
            </a>
        {/each}
    </div>
</div>

<style>
    #wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: aliceblue;
    }
    #links {
        background-color: white;
        height: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    .item {
        flex-basis: 25%;
    }

    .item img {
        max-width: 60%;
    }
</style>