import {
  Card,
  CardContent,
  TextField,
  Button,
  Typography,
  Box,
} from "@mui/material";
import styled from "styled-components";
import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { mutationforgotPassword } from "@/features/auth/mutationForgotPassword";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { FilehubIcon } from "./ui/FileHubIcon";

const StyledCard = styled(Card)`
  margin: auto;
  margin-top: 120px;
  width: 80%;
  max-width: 600px;
  border-radius: 15px !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    border-radius: 20px;
    min-height: 56px;
  }
`;

const StyledButton = styled(Button)`
  &.MuiButtonBase-root {
    margin-top: 30px;
    min-height: 56px;
    border-radius: 30px;
    background: linear-gradient(
      90deg,
      rgba(250, 209, 38, 1) 0%,
      rgba(255, 84, 79, 1) 75%,
      rgba(255, 84, 79, 1) 100%
    );
    color: white;
  }
`;

const CancelButton = styled(Button)`
  color: rgba(250, 209, 38, 1);
`;

export default function EmailInput() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const router = useRouter();
  const [isEmail, setIsEmail] = useState(true);
  const [forgotPassword] = useMutation(mutationforgotPassword);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      try {
        await forgotPassword({ variables: { email } });
        setIsSubmitted(true);
      } catch (error) {
        toast.error("Une erreur s'est produite. Veuillez réessayer.");
      }
    } else {
      toast.error("Veuillez saisir votre email.");
      setIsEmail(false);
    }
  };

  const handleCancel = () => {
    router.push("/loginPage");
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <FilehubIcon style={{ width: "217px", height: "auto" }} />
      <StyledCard variant="outlined">
        <CardContent>
          {isSubmitted ? (
            <Typography variant="h5" align="center" gutterBottom>
              L&apos;email a bien été envoyé. Suivez les instructions à
              l&apos;intérieur pour modifier votre mot de passe.
            </Typography>
          ) : (
            <>
              <Typography variant="h5" align="center" gutterBottom>
                Renseignez votre email pour modifier votre mot de passe
              </Typography>
              <form onSubmit={handleSubmit}>
                <Box display="flex" flexDirection="column">
                  <StyledTextField
                    margin="normal"
                    label="Email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="email"
                    autoFocus
                  />
                  {!isEmail && (
                    <Typography variant="body2" color="error">
                      Veuillez renseigner votre email.
                    </Typography>
                  )}
                  <StyledButton type="submit" variant="contained">
                    Recevoir un code de vérification
                  </StyledButton>
                  <CancelButton onClick={handleCancel}>Annuler</CancelButton>
                </Box>
              </form>
            </>
          )}
        </CardContent>
      </StyledCard>
    </Box>
  );
}
