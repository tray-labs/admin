<script>
    import { Bar } from 'vue-chartjs'

    export default Bar.extend({
        mounted () {
            // Overwriting base render method with actual data.
            this.renderChart({
                labels: ['Joana', 'Marcela', 'Patricia', 'Diego'],
                datasets: [
                    {
                        label: 'Agosto/2014',
                        backgroundColor: '#1ab551',
                        data: [25, 50, 20, 3]
                    }
                ]
            }, {responsive: true, maintainAspectRatio: false})
        }
    })
</script>
