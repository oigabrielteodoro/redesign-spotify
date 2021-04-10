export interface SignInValuesDTO {
  email: string;
  password: string;
}

interface AuthContextDataDTO {
  token?: string;
  isSigned: boolean;
  authorize_external_url?: string;
  clearAuthorizeExternalUrl: () => void;
  signIn: (data: SignInValuesDTO) => Promise<void>;
  signOut: () => Promise<void>;
}

export default AuthContextDataDTO;
