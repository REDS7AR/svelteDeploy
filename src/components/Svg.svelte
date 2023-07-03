<script>
    export let width;
    export let height;
    export let viewBox;
    export let fill;
    export let xmlns;
    export let paths = [];
    export let customD = [];

    $: computedPaths = [...paths, ...customD.map((d) => ({ d, fill}))];
</script>

<svg {width} {height} {viewBox} {fill} {xmlns}>
    {#each computedPaths as path}
        <path d="{path.d}", fill={path.fill}/>
    {/each}
</svg>




