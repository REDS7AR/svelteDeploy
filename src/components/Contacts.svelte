<script>
    let city = 'г. Краснодар';
    let phone = '+7 (989) 141-28-08';
</script>

<div class="contacts">
    <span class="contacts-city">{city}</span>
    <a class="contacts-phone animation__line" href="tel: +79891412808">{phone}</a>
</div>

<style lang="scss">
    $contacts: '.contacts';
    #{$contacts}{
        display: flex;
        flex-wrap: wrap;
        margin-left: 20.25%;
        #{$contacts}-city{
            margin-right: 26px;
        }
    }
</style>