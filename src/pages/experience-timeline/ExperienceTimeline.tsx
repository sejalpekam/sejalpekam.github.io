import React, { FC } from 'react';
import { Box, Flex, Image, Text, Link, Heading, useTheme, useColorModeValue, useColorMode, UnorderedList, ListItem } from '@chakra-ui/react';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { configs } from "shared/content/Content";
import { Tags } from 'shared/tags/Tags';
import "react-vertical-timeline-component/style.min.css";  // Import the timeline styles
import './ExperienceTimeline.css';

const ExperienceTimeline: FC = () => {
    const theme = useTheme();
    const { colorMode } = useColorMode();
    const companyColor = useColorModeValue(theme.colors.primary[600], theme.colors.primary[100]); // Light vs. dark mode color
    const arrowColor = useColorModeValue(theme.colors.gray[900], theme.colors.white); // Light vs. dark mode color
    const timelineClassName = colorMode === "light" ? "vertical-timeline light-mode" : "vertical-timeline dark-mode";


    return (
        <Box py={20} maxW={theme.sizes.container.xl}  gap={{ base: "2", md: "1" }}>
            <Heading as="h2" textAlign="center" mb={8} fontFamily={theme.fonts.heading} fontWeight={theme.fontWeights.bold}>
                Work Experiences
            </Heading>
            <VerticalTimeline className={timelineClassName}>
                {configs.about.experiences.map((exp, idx) => (
                    <VerticalTimelineElement
                        key={exp.id}
                        date={exp.duration}
                        icon={
                            <Box
                                borderRadius="full"
                                overflow="hidden"
                                width="60px"
                                height="60px"
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                boxShadow="lg"
                                // bg={boxBackgroundColor}
                            >
                                <Image
                                    src={`${exp.companyLogo}`}
                                    alt={`${exp.company} logo`}
                                    width="100%"   
                                    height="auto"  
                                    objectFit="contain" 
                                />
                            </Box>
                        }
                        iconStyle={{
                            boxShadow: "none",

                        }}
                        contentStyle={{
                            background: "transparent",
                            boxShadow: "none",
                            transition: 'all 0.3s ease',
                        }}
                        contentArrowStyle={{
                            borderRight: `7px solid ${arrowColor}`,
                        }}
                    >
                        
                        <Heading as="h3" size="lg" fontFamily={theme.fonts.heading} mb={2}>
                            {exp.position}
                        </Heading>
                        <Heading as="h4" size="md" fontFamily={theme.fonts.body} mt={2} color={companyColor}>
                            {exp.company}
                        </Heading>
                        <UnorderedList mt={4} fontFamily={theme.fonts.body}>
                            {exp.description.map((point, idx) => (
                                <ListItem key={idx}>{point}</ListItem>
                            ))}
                        </UnorderedList>
                        <Tags tags={exp.keySkills} size="sm" id={exp.id} />
                        <Link
                            href={exp.companyWebsite}
                            isExternal
                            mt={2}
                            fontFamily={theme.fonts.body}
                            fontWeight={theme.fontWeights.bold}
                        >
                            Visit Company Website
                        </Link>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </Box>
    );
};

export default ExperienceTimeline;
