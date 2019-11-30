import { ListaProdutoComponent } from './produtos/lista-produto/lista-produto.component';
import { Routes } from '@angular/router';

import { SobreComponent } from './institucional/sobre/sobre.component';
import { ContatoComponent } from './institucional/contato/contato.component';
import { HomeComponent } from './navegacao/home/home.component';
import { DataBindingComponent } from './demos/data-binding/data-binding.component';

// Arquivo de configuracao de rotas
export const rootRouterConfig: Routes = [
    { path: ' ', redirectTo: '/home', pathMatch: 'full' }, // Na url, vai chamar /home - pathMatch
    { path: 'home', component: HomeComponent },
    { path: 'contato', component: ContatoComponent },
    { path: 'sobre', component: SobreComponent },
    { path: 'data-binding', component: DataBindingComponent },
    { path: 'produto', component: ListaProdutoComponent },
    { path: 'produto-detalhe/:id', component: ListaProdutoComponent }
];
