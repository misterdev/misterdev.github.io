<script>
</script>

<div id="wrapper">
    <div id="content">
        <div id="categories"></div>
        <div id="list"></div>
        <div id="queue"></div>
        <div id="description"></div>
        <div id="skins"></div>
        <div id="stats"></div>
    </div>
</div>

<style>
    #categories {
        grid-area: cats;
        background-color: red;
    }
    #list {
        grid-area: list;
        background-color: blue;
    }
    #queue {
        grid-area: queu;
        background-color: green;
    }
    #description {
        grid-area: desc;
        background-color: yellow;
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