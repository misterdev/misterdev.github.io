<script>
    import DiGithubBadge from 'svelte-icons/di/DiGithubBadge.svelte'
    import FaTwitter from 'svelte-icons/fa/FaTwitter.svelte'
</script>

<div id="wrapper">
    <a class="item" href="https://www.youtube.com/watch?v=z9Uz1icjwrM">
        <img src="images/rock.png" alt="rock"/>
    </a>
    <a class="item" href="https://github.com/misterdev">
        <!-- <div class="logo"><DiGithubBadge /></div> -->
        <img src="images/github3d.png" alt="rock"/>
    </a>
    <a class="item" href="https://twitter.com/misterdev_">
        <!-- <div class="logo"><FaTwitter /></div> -->
        <img src="images/twitter3d2.png" alt="rock"/>
    </a>
    <a class="item">
        <img src="images/linkedin3d.png" alt="rock"/>
    </a>
    <a class="item">
        <img src="images/stack3d.png" alt="rock"/>
    </a>
    <a class="item">
        <img src="images/envelope3d.png" alt="rock"/>
    </a>
</div>

<style>
    #wrapper {
        width: 100%;
        height: 15%;
        max-height: 15%;
        background-color: mediumpurple;
        /* opacity: .2; */
        /* align-self: flex-end; */
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
    .item {
        height: 100%;
        width: 85.78px;
        margin: 1px;
        background-color: green;
        display: flex;
        justify-content: center;
        align-items: center;

    }
    .item:after {
        padding-top: 100%;
    }
    img, .logo {
        width: 80%;
    }
</style>