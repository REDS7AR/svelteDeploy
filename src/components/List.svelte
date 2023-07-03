<script>
    export let items = [];
</script>

<ul class="production__list">
    {#each items as item (item.href)}
        <li class="production__item {item.className}">
            <a class="production__link" href={item.href}>{item.text}</a>
        </li>
    {/each}
</ul>
    

<style lang="scss">

.production__list{
    display: flex;
    justify-content: flex-end;
    flex-direction: column;
}

.production__item:not(:last-child){
    margin-bottom: 8.99%;
}

</style>