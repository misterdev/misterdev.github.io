<script>
    import Categories from './Categories.svelte'
    import List from './List.svelte'
    import Description from './Description.svelte'
</script>

 <!-- https://www.youtube.com/watch?v=tJ3nGtooxoM&t=656s -->
<div id="wrapper">
    <div id="content">
        <div id="categories">
            <Categories />
        </div>
        <div id="list">
            <List />
        </div>
        <div id="description">
            <Description />
        </div>
        <div id="queue"></div>
        <div id="skins"></div>
        <div id="stats"></div>
    </div>
</div>

<style>
    #categories {
        position: relative;
        grid-area: cats;
    }
    #list {
        position: relative;
        grid-area: list;
        background-color: blue;
    }
    #description {
        position: relative;
        grid-area: desc;
        background-color: yellow;
    }
    #queue {
        grid-area: queu;
        background-color: green;
    }
    #skins {
        grid-area: skin;
        background-color: magenta;
    }
    #stats {
        grid-area: stat;
        background-color: orange;
    }
    #wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        padding: 40px;
        overflow: hidden;
        background: greenyellow;
        opacity: .7;
        box-sizing: border-box;
    }
    #content {
        width: 100%;
        height: 100%;
        display: grid;
        grid-template-areas: 
            "cats list list list desc desc desc desc"
            "cats list list list desc desc desc desc"
            "cats list list list desc desc desc desc"
            "cats list list list skin skin skin skin"
            "cats list list list skin skin skin skin"
            "cats list list list skin skin skin skin"
            "cats list list list stat stat stat stat"
            "cats list list list stat stat stat stat"
            "queu queu queu queu stat stat stat stat";
        grid-column-gap: 2px;
        grid-row-gap: 2px;
    }
</style>