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
        color: white;
    }
    #header {
        height: 20%;
        padding: .5% 2%;
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 100%;
    }
    img {
        height: 100%;
    }
    #title {
        flex-grow: 1;
        text-align: center;
    }
    #description {
        font-size: 1vmin;
        text-justify: distribute;
        padding: 2.5% 5%;
    }
</style>