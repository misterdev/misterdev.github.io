<script>
    import {navigation, content} from '../stores/crafting.js'

    let item;
    navigation.subscribe(({cat, selected}) => {
        item = content[cat][selected];
    });
</script>

<div id="wrapper">
    <div id="header">
        <img src={item.icon} />
        <div id="title">{item.label}</div>
        <div id="time">{item.date}</div>
    </div>
    <div id="description">{@html item.description}</div>
</div>

<style>
    #wrapper {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: aqua;
    }
    #header {
        height: 4vw;
        padding: .5% 2%;
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: red;
        font-size: 1.5vw;
        font-weight: 800;
    }
    img {
        width: 2.5vw;
    }
    #title {
        flex-grow: 1;
        text-align: center;
        color: white;
    }
    #description {
        font-size: 1vw;
        text-justify: distribute;
        padding: 1vw 2vw;
    }
</style>