interface FormProps {
  name: string;
  email: string;
  phoneNo: string;
  visitorName: string;
  isLoading: boolean;
  error: FormError;
}

interface FormError {
  nameError?: string;
  emailError?: string;
  phoneError?: string;
  visitorError?: string;
}
