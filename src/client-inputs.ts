import * as core from '@actions/core';

enum NoIdVerificationStrategy {
  AnyCase,
  UpperCase,
  LowerCase,
  Never,
}

enum CommitVerificationStrategy {
  AllCommits,
  Never,
}

enum TitleVerificationStrategy {
  Always,
  Never,
}

interface InputsClientI {
  getNoIdVerificationStrategy(): NoIdVerificationStrategy;
  getCommitVerificationStrategy(): CommitVerificationStrategy;
  getTitleVerificationStrategy(): TitleVerificationStrategy;
  getTrelloApiKey(): string;
  getTrelloApiToken(): string;
  getGitHubApiToken(): string;
}

class InputsClient implements InputsClientI {
  getNoIdVerificationStrategy(): NoIdVerificationStrategy {
    const input = core.getInput('noid_verification_strategy');
    switch (input) {
      case 'any_case':
        return NoIdVerificationStrategy.AnyCase;
      case 'upper_case':
        return NoIdVerificationStrategy.UpperCase;
      case 'lower_case':
        return NoIdVerificationStrategy.LowerCase;
      case 'never':
        return NoIdVerificationStrategy.Never;
      default:
        throw new Error(`Unrecognised value ${input} for "noid_verification_strategy"`);
    }
  }

  getCommitVerificationStrategy(): CommitVerificationStrategy {
    const input = core.getInput('commit_verification_strategy');
    switch (input) {
      case 'all_commits':
        return CommitVerificationStrategy.AllCommits;
      case 'never':
        return CommitVerificationStrategy.Never;
      default:
        throw new Error(`Unrecognised value ${input} for "commit_verification_strategy"`);
    }
  }

  getTitleVerificationStrategy(): TitleVerificationStrategy {
    const input = core.getInput('title_verification_strategy');
    switch (input) {
      case 'always':
        return TitleVerificationStrategy.Always;
      case 'never':
        return TitleVerificationStrategy.Never;
      default:
        throw new Error(`Unrecognised value ${input} for "title_verification_strategy"`);
    }
  }

  getTrelloApiKey(): string {
    return core.getInput('trello_api_key', { required: true });
  }

  getTrelloApiToken(): string {
    return core.getInput('trello_api_token', { required: true });
  }

  getGitHubApiToken(): string {
    return core.getInput('github_api_token', { required: true });
  }
}

export {
  InputsClient,
  InputsClientI,
  NoIdVerificationStrategy,
  TitleVerificationStrategy,
  CommitVerificationStrategy,
};
