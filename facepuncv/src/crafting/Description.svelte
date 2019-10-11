<script>
    import {navigation, content} from '../stores/crafting.js'

    let item;
    navigation.subscribe(({cat, selected}) => {
        item = content[cat][selected];
    });
</script>

<div id="wrapper">
    <div id="header">
        <img src={item.icon} alt="logo" />
        <div id="title"><b>{item.label}</b></div>
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
        height: 25%;
        padding: 1% 2%;
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 100%;
    }
    img {
        height: 80%;
    }
    #title {
        font-size: 80%;
        flex-grow: 1;
        text-align: center;
        opacity: .8;
    }
    #description {
        font-size: 1vmin;
        text-justify: distribute;
        padding: 2.5% 5%;
    }
</style>