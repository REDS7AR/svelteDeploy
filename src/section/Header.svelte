<script>
    import Container from '$components/ContainerWide.svelte';
    import Logo from '$components/Logo.svelte';
    import Contacts from '../components/Contacts.svelte';
</script>

<header class="header">
    <Container class="container-wide">
        <div class="header__row">
            <Logo/>
            <div class="header__nav">
                <ul class="header__nav-list">
                    <li class="header__nav-item"><a class="header__nav-link animation__line" href="#">Проекты</a></li>
                    <li class="header__nav-item"><a class="header__nav-link animation__line" href="#">Цены</a></li>
                    <li class="header__nav-item"><a class="header__nav-link animation__line" href="#">О компании</a></li>
                    <li class="header__nav-item"><a class="header__nav-link animation__line" href="#">Контакты</a></li>
                </ul>
            </div>
            <Contacts/>
        </div>
    </Container>
</header>

<style lang="scss">
    $header: '.header';
    #{$header}{
        margin-top: 39px;
            &::before{
                content: "";
                display: block;
                background: linear-gradient(180deg, $button-color 6%, rgba(47, 74, 211, 0.10) 60%);
                filter: blur(36.5px);
                width: 100%;
                height: 171px;
                position: absolute;
                top: 0;
                z-index: -1;
            }
        #{$header}__row{
           @include center;
        }
        #{$header}__nav-link{
            
        }    
    }

.header__nav-list{
    display: flex;
    width: 110%;
}

.header__nav-item:not(:last-child){
    margin-right: 26px;
}

</style>