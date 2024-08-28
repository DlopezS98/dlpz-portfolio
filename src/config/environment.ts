import { SocialMedia } from '../shared/typings';

export default class Environment {
  readonly socialLinks: Record<SocialMedia, string> = {
    [SocialMedia.GITHUB]: '',
    [SocialMedia.TWITTER]: '',
    [SocialMedia.FACEBOOK]: '',
    [SocialMedia.EMAIL]: '',
  };

  private static _instance: Environment;

  private constructor() {
    this.socialLinks[SocialMedia.GITHUB] = this.gitHubProfile;
    this.socialLinks[SocialMedia.TWITTER] = this.twitterProfile;
    this.socialLinks[SocialMedia.FACEBOOK] = this.facebookProfile;
    this.socialLinks[SocialMedia.EMAIL] = this.emailAddress;
  }

  static get Instance(): Environment {
    return this._instance || (this._instance = new this());
  }

  get gitHubProfile(): string {
    return process.env.REACT_APP_GITHUB_PROFILE || '';
  }

  get twitterProfile(): string {
    return process.env.REACT_APP_TWITTER_PROFILE || '';
  }

  get facebookProfile(): string {
    return process.env.REACT_APP_FACEBOOK_PROFILE || '';
  }

  get emailAddress(): string {
    return process.env.REACT_APP_EMAIL || '';
  }
}
