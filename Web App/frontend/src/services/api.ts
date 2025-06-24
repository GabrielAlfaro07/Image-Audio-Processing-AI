import axios from "axios";

const BASE_URL = "http://localhost:8000/api/v1"; // adaptado a la nueva ruta

export const transcribeAudio = async (audioBlob: Blob): Promise<string> => {
  const formData = new FormData();
  formData.append("file", audioBlob, "audio.wav");

  const response = await axios.post(`${BASE_URL}/transcribe`, formData);
  return response.data.transcription;
};
