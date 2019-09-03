<template>
    <table class="table">
        <thead ref="thead" class="table__header">
        <tr>
            <th :class="'table__cell' + (col.smallHidden ? ' table__cell--sm-hidden' : '')" v-for="col in columns" :key="col.id">
                {{col.title}}
            </th>
        </tr>
        </thead>
        <tbody ref="tbody" class="table__content" @scroll.passive="updateSyncedScroll">
        <tr v-for="(row, ind) in rows" :key="ind">
            <td :class="'table__cell' + (isSmallHidden(key) ? ' table__cell--sm-hidden' : '')" v-for="(val, key) in row" :key="val + key">
                {{val}}
            </td>
        </tr>
        </tbody>
    </table>
</template>
<script>
    export default {
        name: 'table',
        props: {
            columns: Array,
            rows: Array
        },
        mounted: function() {
            this.updateSyncedScroll()
        },
        methods: {
            isSmallHidden(key) {
                return this.columns.find(item => item.id === key).smallHidden
            },
            updateSyncedScroll() {
                const b = this.$refs.tbody;
                const h = this.$refs.thead;
                const l = b.scrollLeft;
                if (h.scrollLeft !== l) {
                    h.scrollLeft = l
                }
                this.$emit("scroll", b.scrollTop, l, b.scrollHeight, b.scrollWidth)
            }
        }
    }
</script>
<style lang="scss">
    @import "../assets/table";
</style>