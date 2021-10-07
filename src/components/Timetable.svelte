<script lang="ts">
    let weekDays = [0, 1, 2, 3, 4, 5, 6];

    function nameOfDay(v: number): string {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        console.assert(v >= 0 && v <= days.length);
        return days[v];
    }
</script>

<div class="timetable">
    {#each weekDays as weekday}
        <div class="weekday">
            <div class="header">
                <span>{nameOfDay(weekday)}</span>
            </div>
        </div>
    {/each}
</div>

<style>
    .timetable {
        grid-area: timetable;
        height: 100vh;
        display: flex;
        border-left: 1px solid #dfdfdf;
    }

    .weekday {
        flex: 1 1;
        border-right: 1px solid #dfdfdf;
    }

    .header {
        text-align: center;
        justify-self: center;
        padding-bottom: .5em;
        border-bottom: 1px solid #dfdfdf;
    }
</style>
