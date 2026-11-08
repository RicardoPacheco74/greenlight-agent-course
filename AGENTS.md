<!-- LOVABLE:BEGIN -->

> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.

<!-- LOVABLE:END -->

# PROTOCOLO DE FINALIZAÇÃO, GIT E SINCRONIZAÇÃO

Sempre que uma tarefa de desenvolvimento, correção, refatoração ou alteração estrutural for concluída, seguir obrigatoriamente este protocolo antes de considerar o trabalho finalizado.

## 1. Verificação do estado do repositório

Executar:

```bash
git status
git branch --show-current
git diff --stat
```
