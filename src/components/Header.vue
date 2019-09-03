<template>
    <header class="header">
        <div class="header__block">
            <ul class="header__menu">
                <li class="header__menu-item">
                    <router-link :to="{ name: 'Component1' }" class="header__link">
                        Component 1
                    </router-link>
                </li>
                <li class="header__menu-item">
                    <router-link :to="{ name: 'Component2' }" class="header__link">
                        Component 2
                    </router-link>
                </li>
            </ul>
        </div>
    </header>
</template>