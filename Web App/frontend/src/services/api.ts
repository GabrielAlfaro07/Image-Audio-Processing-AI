import axios from "axios";

const BASE_URL = "http://localhost:8000/api/v1";

export const transcribeAudio = async (audioBlob: Blob): Promise<string> => {
  const formData = new FormData();
  formData.append("file", audioBlob, "audio.wav");

  const response = await axios.post(`${BASE_URL}/transcribe`, formData);
  return response.data.transcription;
};

export const predictImageEfficientNet = async (imageFile: File | Blob): Promise<{ predicted_class: number; confidence: number }> => {
  const formData = new FormData();
  formData.append("file", imageFile, "image.jpg");

  const response = await axios.post(`${BASE_URL}/EfficientNet`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
};

export const predictImageMobileNet = async (imageFile: File | Blob): Promise<{ predicted_class: number; confidence: number }> => {
  const formData = new FormData();
  formData.append("file", imageFile, "image.jpg");

  const response = await axios.post(`${BASE_URL}/MobileNetv2`, formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
  return response.data;
}