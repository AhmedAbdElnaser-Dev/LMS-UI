<template>
    <div class="dropdown-category">
        <nav>
            <ul>
                <li>
                    <NuxtLink :to="{ path: '/shop', query: { category: 'Quraan' } }">{{ $t("Quraan") }}</NuxtLink>
                </li>
                <li>
                    <NuxtLink :to="{ path: '/shop', query: { category: 'Arabic' } }">{{ $t("Arabic") }}</NuxtLink>
                </li>
                <li>
                    <NuxtLink :to="{ path: '/shop', query: { category: 'Tajweed' } }">{{ $t("Tajweed") }}</NuxtLink>
                </li>
            </ul>
        </nav>
    </div>
</template>
