Desafio MXM

Criação de pacote de componentes para prototipação.

Utilizei como modelo as páginas estáticas de conteúdo dos módulos do MXM-WebManager, na MXM Academy.
As mesmas possuem estruturas repetitivas, com conteúdos diferentes, então identifiquei os seguintes:

- Banner
- Descrição do módulo
- Cabeçalhos das seções de vídeos / documentos / fluxogramas
- Card de vídeo
- Tópicos da seção de documentos
- Card de documento

Foi criado os seguintes componentes:
```
<app-banner bannerId="crm_de_cobranca"></app-banner>
```
No qual informamos qual módulo deve ser referenciado no repositório de imagens.

<app-description></app-description>

Onde alimento o app-description.html com seu conteúdo específico.
```
<app-section-title sectionTitle="Vídeos tutoriais"></app-section-title>
```
Definindo qual seção será apresentada.
```
<app-video-card 
  videoId="846283169" 
  videoTitle="Atendimento do pedido de compras" 
  class="col-xl-4 col-md-6 mb-4">
</app-video-card>
```
Componente do card de vídeo, informando o ID do vídeo e o título do card, deve estar incluído na estrutura
```
  <div class="container">
    <div class="row">
    </div>
  </div>
```
Para responsividade funcional pelo Bootstrap 4.
```
<app-doc-title docTitle="CADASTROS"></app-doc-title>
```
Componente referente a um tópico da seção de documentos
```
<app-doc-item 
  docItem="12387" 
  docItemPadding="56.25" 
  docName="teste">
</app-doc-item>
```
Card de documento refenciado do repositório da MXM, informando o número da rotina, padding do card e nome do mesmo.

Ambas estruturas devem estar incluídas nesta estrutura
```
<div id="faq" role="tablist" aria-multiselectable="true"></div>
```
Para correto funcionamento de estruturas prontas dos cards do Bootstrap 4.




# stackblitz
O projeto foi desenvolvido utilizando o portal:
[StackBlitz next generation editor ⚡️](https://stackblitz.com/~/github.com/p0llus/stackblitz)

Criado um projeto node.js e instalado toda estrutura necessária após isso, para criação de um projeto Angular No Standalone.
