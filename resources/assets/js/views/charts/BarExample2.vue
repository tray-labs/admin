<script>
    import { Bar } from 'vue-chartjs'

    export default Bar.extend({
        mounted () {
            // Overwriting base render method with actual data.
            this.renderChart({
                labels: ['29/04 a 28/05', '29/06 a 28/07', '29/08 a 28/09', '29/10 a 28/11'],
                datasets: [
                    {
                        label: 'Mensagens enviadas',
                        backgroundColor: '#1ab551',
                        data: [30, 15, 30, 30]
                    }, {
                        label: 'Erros de recebimento',
                        backgroundColor: '#aa4643',
                        data: [20, 12, 14, 22]
                    }, {
                        label: 'Descadastramentos',
                        backgroundColor: '#bdaa38',
                        data: [5, 1, 5, 10]
                    }
                ]
            }, {responsive: true, maintainAspectRatio: false})
        }
    })
</script>
