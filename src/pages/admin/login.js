import Layout from "components/layout";
import ModalLoading from "components/modalLoading";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Input,
  Label,
  Text,
} from "theme-ui";

import { useRouter } from "next/router";
import { commonStyles } from "pages/works/web-content";
import { useCheckPageValid, useInitLogin } from "queries";
import { useState } from "react";
import { PATHS } from "theme/constant";

export const SectionStyle = {
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  padding: "48px 32px",
  maxWidth: 600,
};

export const CommonFlexRowStyle = {
  flexDirection: "row",
  display: "flex",
  alignItem: "center",
  justifyContent: "space-between",
};

export default function IndexPage() {
  const router = useRouter();
  useCheckPageValid({ isRequireAuth: false, fallbackPath: PATHS.ADMIN });
  const [errors, setErrors] = useState({});
  const { initLogin, isMutating } = useInitLogin({
    onError: (err) => {
      setErrors({ email: err.message });
    },
    onSuccess: (res) => {
      setErrors({});
    },
  });
  const handleSubmit = (e) => {
    const {
      target: { email, password },
    } = e;
    e.preventDefault();
    initLogin({ email: email.value, password: password.value });
    console.log("target: ", email.value, password.value);
  };
  return (
    <Layout>
      <Box sx={commonStyles.container} id="resume-content">
        <Heading as="h1" sx={commonStyles.h1}>
          Login
        </Heading>
        <Container sx={SectionStyle}>
          <form onSubmit={handleSubmit}>
            <Label>Email *</Label>
            <Input
              placeholder="Email"
              name="email"
              required
              defaultValue="maithitnmt@gmail.com"
            />
            {errors.email && <Text variant="error">{errors.email}</Text>}
            <Label className="mt-4">Password *</Label>
            <Input
              placeholder="Password"
              name="password"
              type="password"
              required
              defaultValue="Abcd@1234"
            />

            <Flex
              className="mt-4"
              sx={{ ...CommonFlexRowStyle, justifyContent: "flex-end" }}
            >
              <Button
                variant="text"
                type="button"
                className="mr-4"
                onClick={() => router.push(PATHS.ADMIN)}
              >
                Back
              </Button>
              <Button type="submit">Login</Button>
            </Flex>
          </form>
        </Container>

        <ModalLoading isLoading={isMutating} />
      </Box>
    </Layout>
  );
}
