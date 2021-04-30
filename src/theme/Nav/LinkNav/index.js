import React from "react";
import { Link, Button } from "@chakra-ui/react";

const LinkNav = ({ href, text }) => {
    return (
        <Button
            colorScheme="blackAlpha"
            size="xs"
            as={Link}
            href={href}
            _hover={{
                textDecoration: "none",
                backgroundColor: "#333",
            }}
            margin="0"
        >
            {text}
        </Button>
    );
};

export default LinkNav;
