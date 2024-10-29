import { FC } from "react";

import { Box, Flex, Heading, Text, Image, Button, IconButton, Center } from "@chakra-ui/react";

import { configs, Content, MarkdownFile, useContent } from "shared/content/Content";
// import { Blog } from "pages/about/blog/Blog";
import { Education } from "pages/about/education/Education";
import { Experience } from "pages/about/experience/Experience";
import { Skills } from "pages/about/skills/Skills";
import { VolumeIcon } from "utils/Icons";
import { ConnectPageId } from "utils/useScroll";

export const About: FC = () => {
    const content = useContent(MarkdownFile.About);

    const onPlay = () => {
        const audio = new Audio(configs.common.audioFile);
        audio.play();
    };

    const handleScrollToFooter = () => {
        const footerElement = document.getElementById(ConnectPageId);
        if (footerElement) {
            footerElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Box>
            <Flex pt="8" gap={{ base: 6, md: 6, lg: 12 }} direction={{ base: "column", md: "row" }}>
                <Box flex="0.35" data-aos="fade-up">
                    <picture>
                        <source type="image/webp" srcSet={configs.common.mainPicture}></source>
                        <source type="image/jpeg" srcSet={configs.common.mainPictureJPG}></source>
                        <Image borderRadius="xl" src={configs.common.mainPicture} w="100%" alt="profile image" />
                    </picture>
                </Box>
                <Box flex="0.85">
                    <Heading data-aos="fade-down">{configs.common.name}</Heading>
                    <Flex alignItems="center">
                        <Text fontWeight="bold" opacity="0.5" data-aos="fade" data-aos-delay="200">
                            {configs.common.pronunciation}
                        </Text>

                        {/* <Button
                            size="xs"
                            aria-label="pronunciation button"
                            as={IconButton}
                            variant="icon"
                            fontSize="md"
                            icon={<VolumeIcon />}
                            onClick={onPlay}
                            data-aos="fade"
                            data-aos-delay="400"
                        /> */}
                    </Flex>
                    <Box pt="4" data-aos="fade-up" data-aos-delay="400">
                        <Content fontSize="lg">{content.about}</Content>
                    </Box>
                    <Center mt="6">
                            <Button data-aos="fade"  size="lg" borderRadius="xl" mr="2" onClick={handleScrollToFooter}>
                            Let’s Connect
                            </Button>
                    </Center>
                </Box>
                
            </Flex>
            <Flex
                direction={{ base: "column", md: "row" }}
                gap={{ base: 16, md: 6, lg: 12 }}
                mt="16"
                justifyContent="space-between"
            >
                <Box flex="0.7" flexShrink={0} overflow="hidden">
                    <Education />
                </Box>
                {/* <Box flex="0.6" overflow="hidden">
                    <Experience />
                </Box> */}
            </Flex>
            {/* <Box pt="16">
                <Skills />
            </Box> */}
            {/* <Box pt="16">
                <Blog />
            </Box> */}
        </Box>
    );
};