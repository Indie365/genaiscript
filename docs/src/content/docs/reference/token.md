---
title: Authorization
---

# OpenAI or Llama Token

GenAIScript will try to find the connection token from various sources:

-   a `.env` file in your root project.
-   process environment variables from the CLI

## .env file

The extension also supports the following set of variables:

-   `OPENAI_API_TYPE`, `OPENAI_API_BASE`, `OPENAI_API_KEY`, `OPENAI_API_VERSION` variables.
-   `AZURE_OPENAI_API_ENDPOINT` or `AZURE_OPENAI_API_BASE`, `AZURE_OPENAI_API_KEY` variables.
-   `AZURE_API_BASE`, `AZURE_API_KEY`, `AZURE_API_VERSION` variables.

Aditionaly

-   the `OPENAI_API_BASE` can point to a local server, e.g. using [https://jan.ai/api-reference/](https://jan.ai/api-reference/) at `http://localhost:1337/v1`.
-   the `OPENAI_API_TYPE` should be `azure` or `local`. If not specified, we'll try to guess based on the `OPENAI_API_BASE` value.
