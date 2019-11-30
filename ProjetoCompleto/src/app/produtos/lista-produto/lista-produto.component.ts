import { Component, OnInit } from '@angular/core';

import { ProdutoService } from './../produtos.service';
import { Produto } from './../produto';
import { error } from 'util';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html'
})

export class ListaProdutoComponent implements OnInit {

  constructor(private produtoService: ProdutoService) { }

  public produtos: Produto[];

  ngOnInit() {
  
    this.produtoService.obterProdutos()
      .subscribe(
        retornoProdutos => {
          this.produtos = retornoProdutos;
          console.log(retornoProdutos);
        },
        erro => console.log(erro)
      );
    
  }
}
