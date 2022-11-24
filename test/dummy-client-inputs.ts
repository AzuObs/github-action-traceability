import {
  CommitVerificationStrategy,
  InputsClientI,
  NoIdVerificationStrategy,
  TitleVerificationStrategy,
} from '../src/client-inputs';

class InputsClientBuilder {
  commitVerificationStrategy: CommitVerificationStrategy;
  noIdVerificationStrategy: NoIdVerificationStrategy;
  titleVerificationStrategy: TitleVerificationStrategy;

  constructor() {
    this.commitVerificationStrategy = CommitVerificationStrategy.NEVER;
    this.noIdVerificationStrategy = NoIdVerificationStrategy.NEVER;
    this.titleVerificationStrategy = TitleVerificationStrategy.NEVER;
  }

  withCommitVerificationStrategy(strategy: CommitVerificationStrategy): InputsClientBuilder {
    this.commitVerificationStrategy = strategy;
    return this;
  }

  withNoIdVerificationStrategy(strategy: NoIdVerificationStrategy): InputsClientBuilder {
    this.noIdVerificationStrategy = strategy;
    return this;
  }

  withTitleVerificationStrategy(strategy: TitleVerificationStrategy): InputsClientBuilder {
    this.titleVerificationStrategy = strategy;
    return this;
  }

  build(): InputsClientI {
    return new DummyInputsClient(
      this.commitVerificationStrategy,
      this.noIdVerificationStrategy,
      this.titleVerificationStrategy,
    );
  }
}

class DummyInputsClient implements InputsClientI {
  commitVerificationStrategy: CommitVerificationStrategy;
  noIdVerificationStrategy: NoIdVerificationStrategy;
  titleVerificationStrategy: TitleVerificationStrategy;

  constructor(
    commitVerificationStrategy: CommitVerificationStrategy,
    noIdVerificationStrategy: NoIdVerificationStrategy,
    titleVerificationStrategy: TitleVerificationStrategy,
  ) {
    this.commitVerificationStrategy = commitVerificationStrategy;
    this.noIdVerificationStrategy = noIdVerificationStrategy;
    this.titleVerificationStrategy = titleVerificationStrategy;
  }

  getCommitVerificationStrategy(): CommitVerificationStrategy {
    return this.commitVerificationStrategy;
  }

  getNoIdVerificationStrategy(): NoIdVerificationStrategy {
    return this.noIdVerificationStrategy;
  }

  getTitleVerificationStrategy(): TitleVerificationStrategy {
    return this.titleVerificationStrategy;
  }

  getGitHubApiToken(): string {
    return '';
  }

  getTrelloApiKey(): string {
    return '';
  }

  getTrelloApiToken(): string {
    return '';
  }
}

export { InputsClientBuilder };