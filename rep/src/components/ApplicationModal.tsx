import React, { useState } from 'react';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
  Heading,
  useToast,
  Flex,
  Box,
  Text,
} from '@chakra-ui/react';
import { db, storage } from '../firebase-config'; // Import db and storage
import { addDoc, collection } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApplicationModal: React.FC<ApplicationModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    linkedinUrl: '',
    resume: null,
    workAuth: '',
    experience: '',
    currentSalary: '',
    targetComp: '',
    employmentStatus: '',
    pipelineVelocity: '',
    primaryMotivation: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      // @ts-ignore
      setFormData((prev) => ({ ...prev, resume: e.target.files[0] }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // @ts-ignore
    if (!formData.resume) {
      toast({
        title: 'Error',
        description: 'Please upload your resume.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // 1. Upload resume to Firebase Storage
      // @ts-ignore
      const resumeFile = formData.resume as File;
      const storageRef = ref(storage, `resumes/${formData.fullName} - ${resumeFile.name}`);
      const uploadResult = await uploadBytes(storageRef, resumeFile);
      const resumeUrl = await getDownloadURL(uploadResult.ref);

      // 2. Save form data to Firestore
      const applicationData = { ...formData, resume: resumeUrl, submittedAt: new Date() };
      await addDoc(collection(db, 'applications'), applicationData);

      // 3. Show success message and close modal
      toast({
        title: 'Dossier Received.',
        description: "Your profile has been securely uploaded for your Rep. advisor's review",
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      onClose();
    } catch (error) {
      console.error("Error submitting application: ", error);
      toast({
        title: 'Submission Error',
        description: "There was a problem submitting your application. Please try again later.",
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent color="#1D242E" borderRadius="md" overflow="hidden">
        <ModalHeader
          bg="white"
          borderBottom="1px solid"
          borderColor="gray.200"
        >
          <Flex align="center">
            <Box bg="#C95B32" w="8px" h="8px" borderRadius="full" mr={3} />
            <Text fontFamily="mono" fontSize="sm" fontWeight="bold" color="#C95B32">
              TELL US ABOUT YOU
            </Text>
          </Flex>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody py={6} bg="#F7F2ED">
          <form onSubmit={handleSubmit}>
            <VStack spacing={6} align="stretch">
              {/* Section A: The Dossier */}
              <Heading as="h3" size="md" fontFamily="serif">Section A: The Dossier</Heading>
              <FormControl isRequired>
                <FormLabel>Full Name</FormLabel>
                <Input name="fullName" onChange={handleInputChange} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Email Address</FormLabel>
                <Input type="email" name="email" onChange={handleInputChange} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>LinkedIn Profile URL</FormLabel>
                <Input name="linkedinUrl" onChange={handleInputChange} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Upload Resume (PDF Only)</FormLabel>
                <Input type="file" name="resume" accept=".pdf" onChange={handleFileChange} p={1} />
              </FormControl>

              {/* Section B: The Gate */}
              <Heading as="h3" size="md" fontFamily="serif">Section B: The Gate</Heading>
              <FormControl isRequired>
                <FormLabel>Work Authorization Status</FormLabel>
                <Select name="workAuth" onChange={handleInputChange} placeholder="Select status">
                  <option>I am a US Citizen or Green Card Holder.</option>
                  <option>I have valid work authorization (H1B/TN) that does not require new sponsorship.</option>
                  <option>I require visa sponsorship to work in the US.</option>
                </Select>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Total Professional Experience</FormLabel>
                <Select name="experience" onChange={handleInputChange} placeholder="Select experience level">
                  <option>Less than 3 years</option>
                  <option>3 – 7 years</option>
                  <option>8 – 15 years</option>
                  <option>15+ years</option>
                </Select>
              </FormControl>

              {/* Section C: The Value Matrix */}
              <Heading as="h3" size="md" fontFamily="serif">Section C: The Value Matrix</Heading>
              <FormControl isRequired>
                <FormLabel>Current (or Most Recent) Base Salary</FormLabel>
                <Select name="currentSalary" onChange={handleInputChange} placeholder="Select salary range">
                  <option>Under $80,000</option>
                  <option>$80,000 – $120,000</option>
                  <option>$120,000 – $200,000</option>
                  <option>$200,000 – $400,000+</option>
                </Select>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Target Compensation (Base + Bonus)</FormLabel>
                <Select name="targetComp" onChange={handleInputChange} placeholder="Select target range">
                  <option>&lt;$150k</option>
                  <option>$150k - $250k</option>
                  <option>$250k - $400k</option>
                  <option>$400k+</option>
                </Select>
              </FormControl>

              {/* Section D: The Velocity Matrix */}
              <Heading as="h3" size="md" fontFamily="serif">Section D: The Velocity Matrix</Heading>
              <FormControl isRequired>
                <FormLabel>Current Employment Status</FormLabel>
                <Select name="employmentStatus" onChange={handleInputChange} placeholder="Select status">
                    <option>Employed Passive: Happily Employed but open to strategic moves</option>
                    <option>Employed Active: Employed but actively looking for a new home</option>
                    <option>Recent Transition: Between positions for 0-6 months</option>
                    <option>Full Transition: Actively looking for &gt; 6 months</option>
                    <option>Re-entry: Out of the market &gt; 24 months but now looking</option>
                </Select>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Pipeline Velocity</FormLabel>
                <Select name="pipelineVelocity" onChange={handleInputChange} placeholder="Select velocity">
                    <option>Cold: Not started/just started looking; no traction yet.</option>
                    <option>Warm: Applied to roles, waiting on responses.</option>
                    <option>Hot: Currently in active interview loops.</option>
                    <option>Closing: Have an offer in hand (or expecting one soon) and need negotiation support.</option>
                </Select>
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Primary Motivation</FormLabel>
                <Select name="primaryMotivation" onChange={handleInputChange} placeholder="Select motivation">
                    <option>Stability: "I need to secure a role as quickly as possible to cover expenses."</option>
                    <option>Growth: "I am looking to level up my title/compensation in my next move."</option>
                    <option>Pivot: "I want to switch industries/functions completely."</option>
                    <option>Strategy: "I need a partner to manage my career architecture and negotiation."</option>
                </Select>
              </FormControl>
            </VStack>
          </form>
        </ModalBody>

        <ModalFooter bg="#F7F2ED">
          <Button variant="ghost" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button
            bg="#C95B32"
            color="white"
            _hover={{ bg: '#A94D29' }}
            onClick={handleSubmit}
            isLoading={isSubmitting}
            loadingText="Submitting"
          >
            Submit Application
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ApplicationModal;
