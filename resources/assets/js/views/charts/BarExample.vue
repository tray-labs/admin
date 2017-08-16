<script>
    import { Bar } from 'vue-chartjs'

    export default Bar.extend({
        mounted () {
            // Overwriting base render method with actual data.
            this.renderChart({
                labels: ['Joana', 'Marcela', 'Patricia', 'Diego'],
                datasets: [
                    {
                        label: 'Total de envios contratados em Agosto/2014',
                        backgroundColor: '#254fa2',
                        data: [25, 50, 20, 3]
                    }
                ]
            }, {responsive: true, maintainAspectRatio: false})
        }
    })
</script>
