import { FC, useState } from "react";

import { Accordion, AccordionItem, HStack, Image, Box } from "@chakra-ui/react";
import { configs } from "shared/content/Content";
import { Expandable } from "pages/about/common/expandable/Expandable";
import { ArticleTitle } from "pages/about/common/title/Title";

export const Education: FC = () => {
    const [educationExpanded, setEducationExpanded] = useState<number[]>([]);

    return (
        <>
            <ArticleTitle title="Education" />

            <br />

            <Accordion pt="2" allowMultiple index={educationExpanded} id="education">
                {configs.about.educations.map((edu, idx) => (
                    <AccordionItem p="0" border="0" mb="4" key={`panel-${edu.school}-${edu.degree}`}>
                        <HStack align="start">
                            
                            <Image
                                src={edu.logo}   // Assuming each 'edu' object has a 'logo' property with the logo path
                                alt={`${edu.school} logo`}
                                boxSize="80px"   // Adjust size as needed
                                mr={4}
                            />
                            <Box flex="1">
                                <Expandable
                                    title={edu.school}
                                    subTitle={edu.degree}
                                    date={edu.duration}
                                    content={edu.content}
                                    id={edu.id}
                                    idx={idx}
                                    onChange={setEducationExpanded}
                                    expanded={educationExpanded}
                                />
                            </Box>
                        </HStack>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    );
};
