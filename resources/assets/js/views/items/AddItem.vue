<template>
    <div>
        <h1 class="ls-title-intro ls-ico-home ls-no-border ls-no-padding-top ls-lg-margin-bottom">Incluir Item</h1>

        <div class="animated fade-in-right">
            <form class="ls-form" action="#/items">
                <div data-ls-module="collapse" data-target="#30" class="ls-collapse ls-box ls-box-gray">
                    <a href="#" class="ls-collapse-header">
                        <h3 class="ls-collapse-title">
                            Exclusivo Tray
                        </h3>
                        <p>
                            Itens de acesso exclusivo para funcionários Tray.
                        </p>
                    </a>
                    <div class="ls-collapse-body" id="30">
                        <div class="row">
                            <div class="col-md-4">
                                <h3>Configurações</h3>
                                <p>Configurações referentes a exibição do item.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <fieldset class="ls-lg-margin-bottom">
                    <section class="row ls-lg-margin-bottom">
                        <div class="col-md-4">
                            <h3 class="ls-title-4 ls-md-margin-bottom">Apresentação</h3>
                            <p>
                                Defina se este kit estará ativo para ser exibido na loja.Caso não esteja pronto, desmaque a opção ao lado.
                            </p>
                        </div>
                        <div class="col-md-8 col-lg-6">
                            <div class="ls-label">
                                <label class="ls-label-text ls-no-bold">
                                    <input type="checkbox" name="kit[status]" /> Kit ativo - será exibido na loja para venda
                                </label>
                                <label class="ls-label-text ls-no-bold">
                                    <input type="checkbox" name="kit[featured]" /> Exibir selo destaque no kit <span class="ls-ico-help" data-trigger="hover" data-ls-module="popover" data-placement="right" data-content="Aqui usamos a classe <strong class='ls-color-danger'>.ls-ico-help</strong>" data-title="Popover com ícone de ajuda" data-target="#ls-popover-1"></span>
                                </label>
                                <label class="ls-label-text ls-no-bold">
                                    <input type="checkbox" name="kit[new]" /> Exibir selo lançamento no kit <span class="ls-ico-help"></span>
                                </label>
                                <label class="ls-label-text ls-no-bold">
                                    <input type="checkbox" name="kit[additional]" /> Exibir selo adicional no kit <span class="ls-ico-help"></span>
                                </label>
                            </div>
                        </div>
                        <div class="ls-clearfix"></div>
                    </section>

                    <section class="row ls-lg-margin-bottom">
                        <div class="col-md-4">
                            <h3 class="ls-title-4 ls-md-margin-bottom">Nome e categoria</h3>
                            <p>
                                Insira os dados básicos do kit, selecione sua categoria e crie uma boa descrição falando de suas funcionalidades.
                            </p>
                            <p>
                                Selecione uma ou mais categorias para listar seu kit.
                            </p>
                            <router-link class="ls-text-sm ls-ico-shaft-right ls-ico-right" :to="'/items/add'">
                            Incluir novas categorias
                            </router-link>
                        </div>
                        <div class="col-md-8 col-lg-6">
                            <label class="ls-label">
                                <b class="ls-label-text">Nome do kit</b>
                                <input type="text" placeholder="Ex: Iphone 5s 16GB" required />
                            </label>

                            <div class="row">
                                <label class="ls-label col-md-6">
                                    <b class="ls-label-text">Categoria principal</b>
                                    <div class="ls-custom-select">
                                        <select class="ls-custom">
                                            <option value="">Categoria 1</option>
                                            <option value="">- Categoria 1.1</option>
                                            <option value="">--Categoria 1.1.1</option>
                                        </select>
                                    </div>
                                </label>
                            </div>
                        </div>
                        <div class="ls-clearfix"></div>
                    </section>

                    <section class="row ls-lg-margin-bottom">
                        <div class="col-md-4">
                            <h3 class="ls-title-4 ls-md-margin-bottom">Itens do kit</h3>
                            <p class="ls-lg-margin-bottom">
                                Caso um dos produtos esteja indisponível ou sob consulta, seu kit poderá não ser exibido na loja para venda.
                            </p>

                            <div class="ls-txt-right">
                                <p>
                                    <a href="#" class="ls-btn">
                                        <span class="ls-ico-plus"></span>
                                        Adicionar item
                                    </a>
                                    <a href="#" class="ls-btn">
                                        <span class="ls-ico-minus"></span>
                                        Remover item
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div class="col-md-8 col-lg-8">
                            <div class="ls-box">
                                <h5 class="ls-title-6 ls-md-margin-bottom">Lista de itens (3)</h5>

                                <div>
                                    <table class="ls-table ls-table-striped ls-table-bordered ls-no-margin">
                                        <tbody>
                                            <tr>
                                                <td class="ls-text-sm">
                                                    172 - Item de uma lista 748
                                                </td>
                                                <td class="ls-text-sm ls-txt-right ls-width-150">R$ 99,00</td>
                                                <td class="ls-text-sm ls-txt-right ls-width-150">
                                                    <span aria-label="Ver imagem do produto" class="ls-display-inline-block ls-tooltip-left">
                                                        <i class="ls-ico-images ls-text-xl ls-sm-margin-right"></i>
                                                    </span>
                                                    <a href="#" class="ls-btn-xs ls-btn ls-btn-primary">
                                                        Selecionar
                                                    </a>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td class="ls-text-sm">
                                                    457 - Item de uma lista 778
                                                </td>
                                                <td class="ls-text-sm ls-txt-right ls-width-150">R$ 99,00</td>
                                                <td class="ls-text-sm ls-txt-right ls-width-150">
                                                    <span aria-label="Ver imagem do produto" class="ls-display-inline-block ls-tooltip-left">
                                                        <i class="ls-ico-images ls-text-xl ls-sm-margin-right"></i>
                                                    </span>
                                                    <a href="#" class="ls-btn-xs ls-btn ls-btn-primary">
                                                        Selecionar
                                                    </a>
                                                </td>
                                            </tr>

                                            <tr>
                                                <td class="ls-text-sm">
                                                    525 - Item de uma lista 731
                                                </td>
                                                <td class="ls-text-sm ls-txt-right ls-width-150">R$ 99,00</td>
                                                <td class="ls-text-sm ls-txt-right ls-width-150">
                                                    <span aria-label="Ver imagem do produto" class="ls-display-inline-block ls-tooltip-left">
                                                        <i class="ls-ico-images ls-text-xl ls-sm-margin-right"></i>
                                                    </span>
                                                    <a href="#" class="ls-btn-xs ls-btn ls-btn-primary">
                                                        Selecionar
                                                    </a>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div class="ls-clearfix"></div>
                </fieldset>
                <div>
                    <div class="hidden-xs hidden-sm">
                        <div class="ls-no-padding">
                            <div class="ls-actions-btn ls-bg-white ls-txt-right ls-no-margin">
                                <router-link :to="'/items'" class="ls-btn">Cancelar</router-link>
                                <button type="submit" class="ls-btn-primary">Salvar</button>
                            </div>
                        </div>
                    </div>
                    <div class="visible-xs visible-sm">
                        <div class="ls-no-padding">
                            <div class="ls-actions-btn ls-bg-white ls-txt-right ls-no-margin">
                                <router-link :to="'/items'" class="ls-btn">Cancelar</router-link>
                                <button type="submit" class="ls-btn-primary">Salvar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'additem'
    }
</script>
