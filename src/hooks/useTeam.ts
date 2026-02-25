import { useState, useEffect, useCallback } from 'react';
import type { ManagementMember } from '../components/management/management';
import { message } from 'antd';

export const useTeam = (type: string) => {
    const [members, setMembers] = useState<ManagementMember[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchManagement = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/teams/all?type=${type}`
            );
            
            if (!response.ok) {
                throw new Error(`Failed to fetch: ${response.statusText}`);
            }

            const result = await response.json();
            setMembers(result.data || []);
        } catch {
            message.error("Ma'lumotni yuklashda xatolik yuz berdi");
        } finally {
            setLoading(false);
        }
    }, [type]);

    useEffect(() => {
        fetchManagement();
    }, [fetchManagement]);

    return { members, loading, refetch: fetchManagement };
};