<template>
    <div>
        <h1 class="ls-title-intro ls-ico-users">Clientes</h1>

        <router-link :to="{ name: 'newcustomer'}" class="ls-btn-primary">Cadastrar novo</router-link>

        <div class="ls-box-filter">
            <form action="" class="ls-form ls-form-inline ls-float-left">
                <label class="ls-label col-md-6 col-sm-8">
                    <b class="ls-label-text">Status</b>
                    <div class="ls-custom-select ls-field-sm">
                        <select name="" class="ls-select">
                            <option>Todos</option>
                            <option>Ativos</option>
                            <option>Desativados</option>
                        </select>
                    </div>
                </label>
            </form>

            <form  action="" class="ls-form ls-form-inline ls-float-right">
                <label class="ls-label" role="search">
                    <b class="ls-label-text ls-hidden-accessible">Nome do cliente</b>
                    <input type="text" id="q" name="q" aria-label="Faça sua busca por cliente" placeholder="Nome do cliente" required="" class="ls-field-sm">
                </label>
                <div class="ls-actions-btn">
                    <input type="submit" value="Buscar" class="ls-btn ls-btn-sm ls-v-align-middle" title="Buscar">
                </div>
            </form>
        </div>

        <table class="ls-table">
            <thead>
            <tr>
                <th>Nome do cliente</th>
                <th class="ls-txt-center hidden-xs">Status</th>
                <th class="ls-txt-center">Envios disponíveis</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>
                    <router-link :to="{ name: 'customer'}">João da Silva</router-link>
                    <span class='ls-tag hidden-xs'>Não recorrente</span>
                </td>
                <td class="ls-txt-center hidden-xs">Ativo</td>
                <td class="ls-txt-center">
                    100.000
                    <small class="ls-display-block">até 01/01/2014</small>
                </td>
                <td class="ls-txt-right ls-regroup">
                    <router-link :to="{ name: 'customer'}" class="ls-btn ls-btn-md">Administrar</router-link>
                    <div data-ls-module="dropdown" class="ls-dropdown ls-pos-right">
                        <a href="#" class="ls-btn ls-btn-lg ls-v-align-middle"></a>
                        <ul class="ls-dropdown-nav">
                            <li><a href="#">Desativar</a></li>
                            <li><a href="#" class="ls-color-danger">Excluir</a></li>
                        </ul>
                    </div>

                </td>
            </tr>
            <tr>
                <td>
                    <router-link :to="{ name: 'customer'}">João da Silva</router-link>
                </td>
                <td class="ls-txt-center hidden-xs">Ativo</td>
                <td class="ls-txt-center">
                    100.000
                    <small class="ls-display-block">até 01/01/2014</small>
                </td>
                <td class="ls-txt-right ls-regroup">
                    <router-link :to="{ name: 'customer'}" class="ls-btn ls-btn-md">Administrar</router-link>
                    <div data-ls-module="dropdown" class="ls-dropdown ls-pos-right">
                        <a href="#" class="ls-btn ls-btn-lg ls-v-align-middle"></a>
                        <ul class="ls-dropdown-nav">
                            <li><a href="#">Desativar</a></li>
                            <li><a href="#" class="ls-color-danger">Excluir</a></li>
                        </ul>
                    </div>

                </td>
            </tr>
            <tr>
                <td>
                    <router-link :to="{ name: 'customer'}">João da Silva</router-link>
                    <span class='ls-tag hidden-xs'>Não recorrente</span>
                </td>
                <td class="ls-txt-center hidden-xs">Ativo</td>
                <td class="ls-txt-center">
                    100.000
                    <small class="ls-display-block">até 01/01/2014</small>
                </td>
                <td class="ls-txt-right ls-regroup">
                    <router-link :to="{ name: 'customer'}" class="ls-btn ls-btn-md">Administrar</router-link>
                    <div data-ls-module="dropdown" class="ls-dropdown ls-pos-right">
                        <a href="#" class="ls-btn ls-btn-lg ls-v-align-middle"></a>
                        <ul class="ls-dropdown-nav">
                            <li><a href="#">Desativar</a></li>
                            <li><a href="#" class="ls-color-danger">Excluir</a></li>
                        </ul>
                    </div>

                </td>
            </tr>
            <tr>
                <td>
                    <router-link :to="{ name: 'customer'}">João da Silva</router-link>
                </td>
                <td class="ls-txt-center hidden-xs">Ativo</td>
                <td class="ls-txt-center">
                    100.000
                    <small class="ls-display-block">até 01/01/2014</small>
                </td>
                <td class="ls-txt-right ls-regroup">
                    <router-link :to="{ name: 'customer'}" class="ls-btn ls-btn-md">Administrar</router-link>
                    <div data-ls-module="dropdown" class="ls-dropdown ls-pos-right">
                        <a href="#" class="ls-btn ls-btn-lg ls-v-align-middle"></a>
                        <ul class="ls-dropdown-nav">
                            <li><a href="#">Desativar</a></li>
                            <li><a href="#" class="ls-color-danger">Excluir</a></li>
                        </ul>
                    </div>

                </td>
            </tr>
            <tr>
                <td>
                    <router-link :to="{ name: 'customer'}">João da Silva</router-link>
                    <span class='ls-tag hidden-xs'>Não recorrente</span>
                </td>
                <td class="ls-txt-center hidden-xs">Ativo</td>
                <td class="ls-txt-center">
                    100.000
                    <small class="ls-display-block">até 01/01/2014</small>
                </td>
                <td class="ls-txt-right ls-regroup">
                    <router-link :to="{ name: 'customer'}" class="ls-btn ls-btn-md">Administrar</router-link>
                    <div data-ls-module="dropdown" class="ls-dropdown ls-pos-right">
                        <a href="#" class="ls-btn ls-btn-lg ls-v-align-middle"></a>
                        <ul class="ls-dropdown-nav">
                            <li><a href="#">Desativar</a></li>
                            <li><a href="#" class="ls-color-danger">Excluir</a></li>
                        </ul>
                    </div>

                </td>
            </tr>

            </tbody>
        </table>

        <div class="ls-pagination-filter">
            <ul class="ls-pagination">
                <li><a href="#">« Anterior</a></li>
                <li class="ls-active"><a href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#" class="hidden-xs">4</a></li>
                <li><a href="#" class="hidden-xs">5</a></li>
                <li><a href="#">Próximo »</a></li>
            </ul>

            <div class="ls-filter-view">
                <label>
                    Exibir
                    <div class="ls-custom-select ls-field-sm">
                        <select>
                            <option value="10">10</option>
                            <option value="30">30</option>
                            <option value="50">50</option>
                            <option value="100">100</option>
                        </select>
                    </div>
                    ítens por página
                </label>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'customers'
    }
</script>
