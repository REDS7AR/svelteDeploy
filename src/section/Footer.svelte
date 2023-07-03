<script>
    export let team = 'x-team';
</script>

<footer class="footer">
    <div class="footer__content">
        <h4 class="footer__content-team">{team}</h4>
    </div>
</footer>

<style lang="scss">
    $footer: '.footer';
    #{footer}::before{
        content: "";
        display: block;
        width: 100%;
        height: 5px;
        background-color: $line-color;
    }
    #{$footer}__content{
        @include center;
    #{$footer}__content-team{
        color: $soft-color;
        padding-top: 3px;
        padding-bottom: 5px;
    }
}
</style>