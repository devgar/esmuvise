<template>
    <header>
        <div class="header-in">
            <h1>Esmuvise</h1>
        </div>
    </header>
    <header class="sticky">
        <div class="header-in no-bottom-padding">    
            <TheNav />
        </div>
    </header>
</template>

<style>
header {
    background: #EEE;
    margin: -8px;
}
.header-in {
    padding: 8px;
}
.no-bottom-padding {
    padding-bottom: 0;
}
.sticky {
    position: sticky;
    top: 0;
}
</style>