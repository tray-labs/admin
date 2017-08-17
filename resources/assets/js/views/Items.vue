<template>
    <div>
        <h1 class="ls-title-intro ls-ico-home ls-no-border ls-no-padding-top ls-lg-margin-bottom">Itens</h1>

        <div class="animated fade-in-right">
            <div class="ls-txt-right">
                <router-link :to="{name: 'additem'}" class="ls-btn ls-btn-primary" title="Incluir novo item">Incluir novo item</router-link>
            </div>

            <div class="ls-box-filter">
                <form class="ls-form ls-form-horizontal" data-ls-module="form">
                    <fieldset>
                        <div class="row ls-sm-margin-bottom">
                            <label class="ls-label col-md-2 col-xs-12">
                                <b class="ls-label-text">Código ou referência</b>
                                <input class="ls-field" type="text" placeholder="Ex: 1234">
                            </label>
                            <label class="ls-label col-md-2 col-xs-12">
                                <b class="ls-label-text">Status</b>
                                <div class="ls-custom-select">
                                    <select class="ls-select">
                                        <option value="">Todos</option>
                                        <option value="active">Ativo</option>
                                        <option value="inactive">Inativo</option>
                                    </select>
                                </div>
                            </label>
                            <label class="ls-label col-md-4 col-xs-12">
                                <b class="ls-label-text">Nome do item</b>
                                <input class="ls-field" placeholder="Ex: Camiseta" type="text">
                            </label>
                            <label class="ls-label col-md-2 col-xs-12">
                                <b class="ls-label-text">Categoria</b>
                                <div class="ls-custom-select">
                                    <select class="ls-select">
                                        <option value="">Todas</option>
                                        <option value="Principal">Principal</option>
                                        <option value="Segundo nível">- Segundo nível</option>
                                        <option value="Terceiro nível">-- Terceiro nível</option>
                                    </select>
                                </div>
                            </label>
                            <label class="ls-label col-md-2 col-xs-12">
                                <b class="ls-label-text">Estoque</b>
                                <div class="ls-custom-select">
                                    <select class="ls-select">
                                        <option value="0">Todos</option>
                                        <option value="1">Maior que 0</option>
                                        <option value="2">Igual a 0</option>
                                        <option value="3">Menor que 0</option>
                                    </select>
                                </div>
                            </label>
                        </div>
                        <div class="row ls-sm-margin-bottom">
                            <label class="ls-label col-md-2 col-xs-12">
                                <b class="ls-label-text">Preço inicial</b>
                                <div class="ls-prefix-group">
                                    <span class="ls-label-text-prefix">R$</span>
                                    <input class="ls-mask-money" type="text" placeholder="0,00"/>
                                </div>
                            </label>
                            <label class="ls-label col-md-2 col-xs-12">
                                <b class="ls-label-text">Preço final</b>
                                <div class="ls-prefix-group">
                                    <span class="ls-label-text-prefix">R$</span>
                                    <input class="ls-mask-money" type="text" placeholder="0,00"/>
                                </div>
                            </label>
                            <label class="ls-label col-md-2 col-xs-12">
                                <b class="ls-label-text">Atributos</b>
                                <div class="ls-custom-select">
                                    <select class="ls-select">
                                        <option value="0">Todos</option>
                                        <option value="1">Destaque</option>
                                        <option value="2">Novidades</option>
                                        <option value="3">Promoções</option>
                                        <option value="4">Frete grátis</option>
                                        <option value="5">Sob consulta</option>
                                    </select>
                                </div>
                            </label>
                            <label class="ls-label col-md-2 col-xs-12">
                                <b class="ls-label-text">Marcas</b>
                                <div class="ls-custom-select">
                                    <select class="ls-select">
                                        <option value="0">Todas</option>
                                        <option value="1">Apple</option>
                                        <option value="2">Motorola</option>
                                        <option value="3">LG</option>
                                        <option value="4">Samsung</option>
                                    </select>
                                </div>
                            </label>
                            <label class="ls-label col-md-2 col-xs-12">
                                <b class="ls-label-text">Variações</b>
                                <div class="ls-custom-select">
                                    <select class="ls-select">
                                        <option value="0">Ocultar</option>
                                        <option value="1">Exibir</option>
                                    </select>
                                </div>
                            </label>
                            <label class="ls-label col-md-2 col-xs-12">
                                <b class="ls-label-text">Imagem disponível</b>
                                <div class="ls-custom-select">
                                    <select class="ls-select">
                                        <option value="0">Todos</option>
                                        <option value="1">Sim</option>
                                        <option value="2">Não</option>
                                    </select>
                                </div>
                            </label>
                        </div>
                        <div class="row">
                            <div class="col-md-8">
                                <div class="ls-collapse ls-no-bg ls-no-border ls-no-padding" data-ls-module="collapse">
                                    <div class="ls-collapse-header ls-display-none"></div>
                                    <div id="products-filter-collapse" class="ls-collapse-body ls-no-padding">
                                        <div class="row">
                                            <label class="ls-label col-md-3 col-xs-12">
                                                <b class="ls-label-text">Outro filtro</b>
                                                <input class="ls-field" type="text" placeholder="Ex: 1234">
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 ls-txt-right">
                                <button class="ls-btn ls-btn-danger" type="reset">Limpar filtro</button>
                                <button class="ls-btn" data-ls-module="collapse" data-target="#products-filter-collapse">
                                    <span data-ls-module="toggleText" data-toggle-text="Ocultar">Expandir</span> filtro
                                </button>
                                <button class="ls-btn" type="submit">Filtrar</button>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>

            <div class="ls-position-relative">
                <table class="ls-table ls-no-hover">
                    <thead>
                        <tr>
                            <th class="ls-width-50">
                                <input type="checkbox" data-item-id="0" data-ls-module="checkboxToggle" data-checkbox-target="items-table">
                            </th>
                            <th>Código</th>
                            <th>Nome</th>
                            <th>Categoria</th>
                            <th>Preço</th>
                            <th>Estoque</th>
                            <th class="ls-txt-center ls-width-100">Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input type="checkbox" data-checkbox-toggle="items-table">
                            </td>
                            <td>1</td>
                            <td>
                                <router-link class="ls-ico-external" :to="'/items/1'">Item 1</router-link>
                            </td>
                            <td>Principal</td>
                            <td>9.99</td>
                            <td>1000</td>
                            <td class="ls-txt-center ls-width-100 ls-background-success">
                                Ativo
                            </td>
                            <td class="ls-txt-right">
                                <a href="#" class="ls-btn-default ls-display-none">Detalhes</a>
                                <button class="ls-btn">
                                    <span class="ls-ico-list"></span>
                                </button>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <input type="checkbox" data-checkbox-toggle="items-table">
                            </td>
                            <td>2</td>
                            <td>
                                <router-link class="ls-ico-external" :to="'/items/2'">Item 2</router-link>
                            </td>
                            <td>Principal</td>
                            <td>9.99</td>
                            <td>1000</td>
                            <td class="ls-txt-center ls-width-100 ls-background-danger">
                                Inativo
                            </td>
                            <td class="ls-txt-right">
                                <a href="#" class="ls-btn-default ls-display-none">Detalhes</a>
                                <button class="ls-btn">
                                    <span class="ls-ico-list"></span>
                                </button>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <input type="checkbox" data-checkbox-toggle="items-table">
                            </td>
                            <td>3</td>
                            <td>
                                <a class="ls-ico-external" href="#">Item 3</a>
                            </td>
                            <td>Principal</td>
                            <td>9.99</td>
                            <td>1000</td>
                            <td class="ls-txt-center ls-width-100 ls-background-success">
                                Ativo
                            </td>
                            <td class="ls-txt-right">
                                <a href="#" class="ls-btn-default ls-display-none">Detalhes</a>
                                <button class="ls-btn">
                                    <span class="ls-ico-list"></span>
                                </button>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <input type="checkbox" data-checkbox-toggle="items-table">
                            </td>
                            <td>4</td>
                            <td>
                                <router-link class="ls-ico-external" :to="'/items/4'">Item 4</router-link>
                            </td>
                            <td>Principal</td>
                            <td>9.99</td>
                            <td>1000</td>
                            <td class="ls-txt-center ls-width-100 ls-background-danger">
                                Inativo
                            </td>
                            <td class="ls-txt-right">
                                <a href="#" class="ls-btn-default ls-display-none">Detalhes</a>
                                <button class="ls-btn">
                                    <span class="ls-ico-list"></span>
                                </button>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <input type="checkbox" data-checkbox-toggle="items-table">
                            </td>
                            <td>5</td>
                            <td>
                                <router-link class="ls-ico-external" :to="'/items/5'">Item 5</router-link>
                            </td>
                            <td>Principal</td>
                            <td>9.99</td>
                            <td>1000</td>
                            <td class="ls-txt-center ls-width-100 ls-background-success">
                                Ativo
                            </td>
                            <td class="ls-txt-right">
                                <a href="#" class="ls-btn-default ls-display-none">Detalhes</a>
                                <button class="ls-btn">
                                    <span class="ls-ico-list"></span>
                                </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'items'
    }
</script>
